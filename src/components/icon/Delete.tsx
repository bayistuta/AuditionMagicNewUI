import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

function Delete(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M4 5.33264V13.166C4 13.9944 4.67157 14.666 5.5 14.666H10.5C11.3284 14.666 12 13.9944 12 13.166V5.33264H4Z" fill="#212121"/>
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M9.3335 2.99939C9.3335 2.4471 8.88578 1.99939 8.3335 1.99939H7.66683C7.11455 1.99939 6.66683 2.4471 6.66683 2.99939H3.8335C3.55735 2.99939 3.3335 3.22325 3.3335 3.49939C3.3335 3.77553 3.55735 3.99939 3.8335 3.99939H12.1668C12.443 3.99939 12.6668 3.77553 12.6668 3.49939C12.6668 3.22325 12.443 2.99939 12.1668 2.99939H9.3335Z" fill="#212121"/>
      </SvgIcon>
    );
  }

  export default Delete;