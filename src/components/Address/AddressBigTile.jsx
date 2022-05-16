import { useState } from "react";
import { useLogin } from "../../context";

 

export const AddressBigTile = props => {
  const address = props.address;
  const { userState, userDispatch } = useLogin();
  const [value, setValue] = useState(userState?.selectedAddress?._id);

  const handleChange = (address, id) => {
    setValue(id);
    userDispatch({
      type: "SET_SELECTED_ADDRESS",
      payload: address,
    });
  };
  return (
    <div>
      <div>
        {" "}
        <input
          type="radio"
          name="address"
          checked={address?._id === value}
          onChange={() => handleChange(address, address._id)}
        />
        <b style={{ textTransform: "capitalize", paddingLeft: "2px" }}>
          {address?.name}
        </b>
      </div>{" "}
      <div style={{ paddingLeft: "22px", textTransform: "capitalize" }}>
        <div>
          {address?.locality}
          {", "}
          {address?.street}
          {", "}
        </div>
        <div>
          {address?.city}
          {" - "}
          {address?.zip}
        </div>
        <div>{address.state}</div>
      </div>
    </div>
  );
};
