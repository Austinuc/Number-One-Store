import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";




export const ItemList = () => {

  return (
    <div class="flex justify-between items-center mb-3 bg-white">
      <h4 class="text-[18px] flex items-center gap-1">
        <span>Fried Rice</span>
        <a class="text-[13px] text-blue-500 hover:text-blue-600" href="/quizes">
          ( #600 )
        </a>
      </h4>
      <div class="flex flex-row gap-2">
        <button class="h-7 rounded-sm text-white hover:bg-blue-600 flex justify-center items-center">
          <SvgIcon color={"error"} fontSize="small">
            {<ArrowDownIcon />}
          </SvgIcon>
        </button>
        <span>1</span>
        <button class="h-7 rounded-sm text-white hover:bg-blue-600 flex justify-center items-center">
          <SvgIcon color={"success"} fontSize="small">
            {<ArrowUpIcon />}
          </SvgIcon>
        </button>
        <button className=" text-[13px] h-7 rounded-sm text-white bg-blue-500 hover:bg-blue-600 flex justify-center items-center">
          Order
        </button>
      </div>
    </div>
  );
};
