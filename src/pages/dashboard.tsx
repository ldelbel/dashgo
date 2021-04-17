import { Header } from "../components/Header";
import { Flex, SimpleGrid, Box, Text, theme, DarkMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false, // <-- never goes to ssr
}); // this is a way to import libraries on the front end instead of the intermediary node.js server of next.js, for the cases when the library depends on the window variable

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    fillSeriesColor: true,
    theme: "dark", // disable here to stop showing on hover
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["4","8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Week Subscribers
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["4","8"]}  bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Opening Rate
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
