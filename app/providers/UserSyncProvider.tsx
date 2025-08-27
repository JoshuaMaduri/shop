"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react"; 
import { useRecoilState } from "recoil";
import { gql } from "@apollo/client";
import GraphQlClient from "../lib/apolloClient";
import { userState } from "../atoms/userAtom";
