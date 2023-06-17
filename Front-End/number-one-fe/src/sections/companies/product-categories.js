import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
  Card,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompanyCard } from "src/sections/companies/company-card";
import { CompaniesSearch } from "src/sections/companies/companies-search";
import { CategoryTabs } from "src/sections/companies/category-tab";

export const ProductCategories = () => {
  return (
   
      <Stack direction="row" justifyContent="space-around" spacing={4}>
        <CategoryTabs />
        <CategoryTabs />
        <CategoryTabs />
        <CategoryTabs />
      </Stack>
   
  );
}
