
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { calculationInvestments } from "../util/investmentResult";
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
const Result = ({values}) => {
    const result=[]
    calculationInvestments(values,result)
    console.log("Result component");
  return (
    <TableContainer marginTop={"50px"} overflowY={"auto"} height={"200px"}>
      <Table variant="simple" size={"sm"}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Year</Th>
            <Th isNumeric>interest</Th>
            <Th>valueEndOfYear</Th>
            <Th>AnnualInvestment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {result.map((data, dataIndex) => {
            const { annualInvestment, interest, valueEndOfYear, year } = data;

            return (
              <Tr key={dataIndex}>
                <Td>{year}</Td>
                <Td>
                  {formatter.format(interest)}
                </Td>
                <Td isNumeric>{formatter.format(valueEndOfYear)}</Td>
                <Td isNumeric>{annualInvestment}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Result;
