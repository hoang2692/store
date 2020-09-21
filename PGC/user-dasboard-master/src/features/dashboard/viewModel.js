import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DashboardView from "./view";

export default function Login() {
  const dispatch = useDispatch();
  return <DashboardView />;
}
