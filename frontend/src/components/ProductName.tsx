import { Fragment, type ReactNode } from "react";
import { PRODUCT_NAME } from "../content/brand.ts";

/** Visible product name — always bold, exact casing "The RISER". */
export function ProductName() {
  return <strong className="product-name">{PRODUCT_NAME}</strong>;
}

/** Split plain-text copy and bold each occurrence of the product name. */
export function textWithProductName(text: string): ReactNode {
  if (!text.includes(PRODUCT_NAME)) {
    return text;
  }

  const parts = text.split(PRODUCT_NAME);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 ? <ProductName /> : null}
    </Fragment>
  ));
}
