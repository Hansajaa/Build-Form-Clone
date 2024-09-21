import { createContext } from "react";
import {WELCOME_FORM} from '../types/FormsTypes'

export const ChangeFormContext = createContext({type:WELCOME_FORM, id:1});