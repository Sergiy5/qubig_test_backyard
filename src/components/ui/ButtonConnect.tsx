interface ButtonConnectProps {
    label: string;
    children: React.ReactNode;
}
export const ButtonConnect: React.FC<ButtonConnectProps> = ({
  label = "0x2633...gerb",
  children,
}) => {
  return (
    <div className="flex justify-start items-center gap-2 pl-[11px] pr-[3px] py-[3px] rounded-[100px] bg-[#f0f1f3] border border-[#ebebed]">
      <p className="text-[13px] font-medium text-center text-[#303030]">
        {label}
      </p>
      {/* <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative overflow-hidden space-x-[-1036.9171142578125px] p-2.5 rounded-[43px] bg-[#c4c4c4]/[0.21]"> */}
        {children}
      {/* </div> */}
    </div>
  );
};