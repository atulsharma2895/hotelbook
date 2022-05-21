import { CircularProgressbar } from "react-circular-progressbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "react-circular-progressbar/dist/styles.css";
import './Featured.scss'


// this component call by ==> 🟨 ../pages/Home.js 🟨 <Component/>
const Featured = () => {
    return (
        <div className='featured'>

            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>

            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                        text='70%'
                        value={70}
                        strokeWidth={6}
                    />
                </div>

                <p className="title">Total sales today</p>
                <p className="amount">$420</p>
                <p className="desc"> Previous transactions processing. Last payments may not be included.</p>

                <div className="summary">

                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">$ 12.5k</div>
                        </div>

                    </div>


                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$ 12.5k</div>
                        </div>
                    </div>


                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$ 12.5k</div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Featured