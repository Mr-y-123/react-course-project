import { forwardRef } from "react";
import { FormControl, FormLabel, Input ,Textarea} from "@chakra-ui/react";
const Inputs = forwardRef(function Inputs({ label, textarea,...props },ref){
    return (
      <>
        <FormControl>
          <FormLabel>{label}</FormLabel>
          {textarea ? <Textarea {...props} ref={ref}/> : <Input type="text" {...props} ref={ref}/>}
        </FormControl>
      </>
    );
  })

export default Inputs;
