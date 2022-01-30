import React, {useState} from "react";
import "../../sass/Pages/Stor.scss"
import filter from "../../assets/Images/filter.png" 

const Filter = () => {

    const data = ["1500-4000", "4001-7000", "7001+"]
  
    const design = ["2", "3", "3+"]
  
    const type = ["Loafers", "Sneakers"]
  
    const colors = ["red", "yellow", "blue", "green"]

    const [filters, setFilters] = useState (false)
    
  return (
    <div>
        <div className="desktop" >
            <div className="filter_head" >
                <div className="title" >
                    FILTERS
                </div>
                <div>
                    <img src={filter} alt="..." />
                </div>
            </div>
            <div className="fitler_cost" >
                <div className="cost_title" >
                Cost
                </div>
                {data.map((item)=>(
                <div className="cost_select" >
                    <input type="checkbox" />
                    <div>
                    Rs. {item}
                    </div>
                </div>
                ))}
            </div>
            <div className="fitler_cost" >
                <div className="cost_title" >
                Color
                </div>
                <div className="colors">
                {colors.map((item)=>(
                    <div className={item}>
                    </div>
                ))}
                </div>
            </div>
            <div className="fitler_cost" >
                <div className="cost_title" >
                Design templates
                </div>
                {design.map((item)=>(
                <div className="cost_select" >
                    <input type="checkbox" />
                    <div>
                    Rs. {item}
                    </div>
                </div>
                ))}
            </div>
            <div className="fitler_cost" >
                <div className="cost_title" >
                type
                </div>
                {type.map((item)=>(
                <div className="cost_select" >
                    <input type="checkbox" />
                    <div>
                    Rs. {item}
                    </div>
                </div>
                ))}
            </div>
            <div className="apply_btn" >
                <button>
                apply
                </button>
            </div>
        </div>
        <div onClick={() => setFilters(true)} className="filter_head mobile_Cart" >
            <img src={filter} alt="..." />
        </div>
        {filters ? 
        <div className="open" >
            <div className="mobile" >
                <div className="filter_head" >
                    <div className="title" >
                        FILTERS
                    </div>
                    <div>
                        <img onClick={() => setFilters(false)} src={filter} alt="..." />
                    </div>
                </div>
                <div className="fitler_cost" >
                    <div className="cost_title" >
                    Cost
                    </div>
                    {data.map((item)=>(
                    <div className="cost_select" >
                        <input type="checkbox" />
                        <div>
                        Rs. {item}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="fitler_cost" >
                    <div className="cost_title" >
                    Color
                    </div>
                    <div className="colors">
                    {colors.map((item)=>(
                        <div className={item}>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="fitler_cost" >
                    <div className="cost_title" >
                    Design templates
                    </div>
                    {design.map((item)=>(
                    <div className="cost_select" >
                        <input type="checkbox" />
                        <div>
                        Rs. {item}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="fitler_cost" >
                    <div className="cost_title" >
                    type
                    </div>
                    {type.map((item)=>(
                    <div className="cost_select" >
                        <input type="checkbox" />
                        <div>
                        Rs. {item}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="apply_btn" >
                    <button>
                    apply
                    </button>
                </div>
            </div>
        </div>
        : null}
    </div>
  );
};

export default Filter;