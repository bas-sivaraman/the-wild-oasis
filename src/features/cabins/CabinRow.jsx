import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateEditCabinForm from "./CreateEditCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    regularPrice,
    discount,
    maxCapacity,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `${name} copy`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button
            title="Duplicate cabin"
            onClick={handleDuplicate}
            style={{ border: "none", marginRight: "16px", padding: "2px 4px" }}
          >
            <HiSquare2Stack />
          </button>
          <button
            title="Edit cabin"
            style={{ border: "none", marginRight: "16px", padding: "2px 4px" }}
            onClick={() => setShowForm((showForm) => !showForm)}
          >
            <HiPencil />
          </button>
          <button
            title="Delete cabin"
            style={{ border: "none", padding: "2px 4px" }}
            disabled={isDeleting}
            onClick={() => deleteCabin(cabinId)}
          >
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateEditCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
