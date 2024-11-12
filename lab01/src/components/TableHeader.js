import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const TableHeader = ({ onSort }) => (
  <thead>
    <tr>
      <th>User</th>
      <th>Post title</th>
      <th>
        <DropdownButton id="dropdown-sort" title="Comments count">
          <Dropdown.Item onClick={() => onSort("sort_ascending")}>Ascending order</Dropdown.Item>
          <Dropdown.Item onClick={() => onSort("sort_descending")}>Descending order</Dropdown.Item>
          <Dropdown.Item onClick={() => onSort("reset")}>Natural order</Dropdown.Item>
        </DropdownButton>
      </th>
    </tr>
  </thead>
);

export default TableHeader;
