import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "regularPrice-asc", label: "Price (low to high)" },
          { value: "regularPrice-des", label: "Price (high to low)" },
          { value: "discount-des", label: "Discount (high to low)" },
          { value: "maxCapacity-asc", label: "Max Capacity (low to high)" },
          { value: "maxCapacity-des", label: "Max Capacity (high to low)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
