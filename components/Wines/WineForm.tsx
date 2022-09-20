// Native Base
import { VStack, Heading, Input, Button, FormControl, Text } from "native-base";

// Formik & Form validation
import { Formik } from "formik";
import * as Yup from "yup";

// API & Hooks
import { useAddWineMutation } from "../../store/api";

// Types
import { Wine } from "../../store/wine.interface";

// Theme
import colors from "../../theme/colors.json"

const WineForm: React.FC<Wine> = (props) => {
  const [ addWine, { isLoading, data, error } ] = useAddWineMutation()
  console.log(data)
  console.log(error)

  return (
    <Formik
      initialValues={{
        name: props.name,
      }}
      onSubmit={(values) => addWine(values)}
      validationSchema={Yup.object({
        name: Yup
        .string()
        .min(1, "Name must be at least 1 characters"),
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
            <Button
              // @ts-ignore
              onPress={handleSubmit}
              width="100%"
              px="6"
              backgroundColor={colors["md.sys.color.primary"].nativeBase}
              borderRadius="3xl"
              isLoading={isLoading}
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
