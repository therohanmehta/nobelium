/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Wishlist.module.css";
import Button from "../components/buttons/button";
import { MdDelete, MdVisibility } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";

export default function Wishlist() {
  let PkgDataFromLocal = JSON.parse(localStorage.getItem("fav"));
  const [localData, setLocalData] = useState(PkgDataFromLocal);
  const navigate = useNavigate();
  const selector = useSelector((state) => state.packages.packages);
  const [view, setView] = useState("");
  // const [open, setOpen] = useState(false);

  function handleDelete(id) {
    const dataAfterDel = localData.filter((item) => item.id !== id);
    setLocalData(dataAfterDel);
    localStorage.setItem("fav", JSON.stringify(dataAfterDel));
    // console.log(dataAfterDel);
  }

  function viewMsg(id) {
    const selectMessage = localData.find((ele) => ele.id == id);
    const message = { ...selectMessage };
    const msg = message.msg;
    console.log(message.msg);
    setView(msg);
    // setOpen(true);
  }
  function HandleAddPackage() {
    navigate("/search");
  }

  return (
    <div className={style.mainBox}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Welcome to Favourite NPM Packages</h3>
        {selector.length != 0 && (
          <Button name="Add Fav" onClick={HandleAddPackage} />
        )}
      </div>
      {selector.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {localData.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.name}</td>
                <td id={style.actions}>
                  <span>
                    <MdVisibility
                      className={style.icons}
                      onClick={() => viewMsg(ele.id)}
                    />
                  </span>
                  <span>
                    <FiEdit className={style.icons} />
                  </span>
                  <span onClick={() => handleDelete(ele.id)}>
                    <MdDelete className={style.icons} />
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                <input
                  style={{ width: "70vw", border: "none", fontSize: "1rem" }}
                  type="text"
                  value={view}
                  onChange={(e) => setView(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <NoPackages onClick={HandleAddPackage} />
      )}
    </div>
  );
}

function NoPackages({ onClick }) {
  return (
    <div id={style.emptyBox}>
      <div classname={style.baseFont}>
        You don't have any favs yet. Please add.
      </div>
      <Button name="Add Fav" onClick={onClick} />
    </div>
  );
}
