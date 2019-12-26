import * as R from "ramda";
import { withRedux } from "../providers/withRedux";

const page = R.compose(withRedux);
export default page;
