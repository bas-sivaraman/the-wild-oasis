import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit }) {
  const { id: cabinId, ...editValues } = cabinToEdit;
  const isEditingSession = Boolean(cabinId);

  const { register, handleSubmit, reset, formState, getValues } = useForm(() =>
    isEditingSession ? editValues : {}
  );
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Successfully created new cabin!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  // function onError(error) {
  //   console.log(error);
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name || ""}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity || ""}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should at least be 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice || ""}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 100,
              message: "Price should at least be 100",
            },
          })}
          defaultValue={100}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount || ""}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= Math.floor(getValues().regularPrice / 2) ||
              "Discount should be less than half of the regular price",
          })}
          defaultValue={0}
        />
      </FormRow>

      <FormRow label="Cabin description" error={errors?.description || ""}>
        <Textarea
          type="number"
          id="description"
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image || ""}>
        <FileInput
          id="image"
          disabled={isCreating}
          {...register("image", {
            required: "This field is required",
          })}
          accept="image/*"
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" size="medium" type="reset">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isCreating}
          variation="primary"
          size="medium"
        >
          Add cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
