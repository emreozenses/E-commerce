import React, { useState } from "react";
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

function NavBarComp(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [dropdownOpen5, setDropdownOpen5] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
  const toggle3 = () => setDropdownOpen3(!dropdownOpen3);
  const toggle4 = () => setDropdownOpen4(!dropdownOpen4);
  const toggle5 = () => setDropdownOpen5(!dropdownOpen5);

  return (
    <Nav tabs>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          KADIN
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown nav isOpen={dropdownOpen2} toggle={toggle2}>
        <DropdownToggle nav caret>
          ERKEK
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown nav isOpen={dropdownOpen3} toggle={toggle3}>
        <DropdownToggle nav caret>
          ANNE&ÇOCUK
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown nav isOpen={dropdownOpen4} toggle={toggle4}>
        <DropdownToggle nav caret>
          AYAKKABI&ÇANTA
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown nav isOpen={dropdownOpen5} toggle={toggle5}>
        <DropdownToggle nav caret>
          SPOR&OUTDOOR
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}

export default NavBarComp;
