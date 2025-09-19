import classNames from "classnames";


type ClassNameMap = { [key: string]: boolean | undefined | null };

export const cn = (
  ...classes: (string | ClassNameMap | undefined | null)[]
) => {
  return classNames(...classes);
};
