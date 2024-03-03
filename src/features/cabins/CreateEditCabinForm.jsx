import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateEditCabinForm({ cabinToEdit = {} }) {
  const { id: cabinId, ...editValues } = cabinToEdit;
  const isEditingSession = Boolean(cabinId);

  const { register, handleSubmit, reset, formState, getValues } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isEditing || isCreating;

  function onSubmit(data) {
    const imageData =
      typeof data.image === "string" ? data.image : data.image[0];

    if (isEditingSession)
      editCabin(
        { cabinData: { ...data, image: imageData }, id: cabinId },
        {
          onSuccess: () => reset(),
        }
      );
    else
      createCabin(
        { ...data, image: imageData },
        {
          onSuccess: () => reset(),
        }
      );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name || ""}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity || ""}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          {...register("description", {
            required: "This field is required",
          })}
          defaultValue=""
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image || ""}>
        <FileInput
          id="image"
          disabled={isWorking}
          {...register("image", {
            required: isEditingSession ? false : "This field is required",
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
          disabled={isWorking}
          variation="primary"
          size="medium"
        >
          {isEditingSession ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEditCabinForm;
