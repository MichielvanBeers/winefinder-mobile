// UI Components
import { VStack, Heading, Input, Button, FormControl } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import { ItemType } from "react-native-dropdown-picker";
import LoadingSpinner from "../UI/LoadingSpinner";

// Formik & Form validation
import { Formik } from "formik";
import * as Yup from "yup";

// API & Hooks
import { useAddWineMutation, useLazyGetAllGrapesQuery } from "../../store/api";
import { useEffect, useState } from "react";

// Types
import { Wine } from "../../store/wine.interface";

// Theme
import colors from "../../theme/colors.json";

const WineForm: React.FC<Wine> = (props) => {
  const [
    addWine,
    { isLoading: isAddWineLoading, data: addWineData, error: addWineError },
  ] = useAddWineMutation();
  const [
    getGrapesTrigger,
    {
      data: getGrapesData,
      error: getGrapesError,
      isLoading: getGrapesIsLoading,
      isFetching: getGrapesIsFetching,
    },
  ] = useLazyGetAllGrapesQuery();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  useEffect(() => {
    getGrapesTrigger();
  }, [getGrapesTrigger]);

  return (
    <Formik
      initialValues={{
        name: props.name,
        grapes: props.grape
      }}
      onSubmit={(values) => {
        addWine(values);
        console.log(values);
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(1, "Name must be at least 1 characters"),
        grapes: Yup.array()
      })}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        return (
          <VStack flex="1" width="80%" space="3" alignItems="center" mt="4">
            <Heading>Add a wine 🍷</Heading>
            <FormControl isInvalid={errors.name ? true : false}>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                name="name"
                type="text"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                placeholder="Campo Viejo"
              />
              <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
            </FormControl>
            {!getGrapesData && !getGrapesError && getGrapesIsLoading ? (
              <LoadingSpinner />
            ) : null}
            {getGrapesData && (
              <DropDownPicker
                open={open}
                value={value}
                multiple={true}
                items={getGrapesData as ItemType<any>[]}
                setOpen={setOpen}
                setValue={setValue}
                schema={{
                  label: "name",
                  value: "id",
                }}
              />
            )}
            <Button
              // @ts-ignore
              onPress={handleSubmit}
              width="100%"
              px="6"
              backgroundColor={colors["md.sys.color.primary"].nativeBase}
              borderRadius="3xl"
              isLoading={isAddWineLoading}
              isLoadingText="Saving wine"
            >
              Save
            </Button>
          </VStack>
        );
      }}
    </Formik>
  );
};

export default WineForm;
