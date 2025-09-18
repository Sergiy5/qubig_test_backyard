import clsx from "clsx";

type ClassNameMap = { [key: string]: boolean | undefined | null };

export const cn = (
  ...classes: (string | ClassNameMap | undefined | null)[]
) => {
  return clsx(...classes);
};
