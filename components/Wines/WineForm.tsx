// Native Base
import { VStack, Heading, Input, Button, FormControl, Text } from "native-base";

// Formik
import { Formik, FormikHelpers } from "formik";

// Form validation
import * as Yup from "yup";

// Types
import { Wine } from "../../store/wine.interface";

// Theme
import colors from "../../theme/colors.json"

// interface WineProps extends Wine {
//   onSubmit: ((
//     values: { name: string | undefined },
//     formikHelpers: FormikHelpers<{ name: string | undefined }>
//   ) => void | Promise<any>) &
//     ((values: any) => {});
// }

const WineForm: React.FC<Wine> = (props) => {
  return (
    <Formik
      initialValues={{
        name: props.name,
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object({
        name: Yup.string().min(4, "Name must be at least 4 characters"),
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
              onPress={handleSubmit}
              width="100%"
              px="6"
              backgroundColor={colors["md.sys.color.primary"].nativeBase}
              borderRadius="3xl"
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
