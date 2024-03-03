import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateEditCabinForm from "../features/cabins/CreateEditCabinForm";
import Button from "../ui/Button";
import { useState } from "react";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row>
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button
          onClick={() => setShowForm((showForm) => !showForm)}
          variation="primary"
          size="large"
        >
          Add new cabin
        </Button>
        {showForm && <CreateEditCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
