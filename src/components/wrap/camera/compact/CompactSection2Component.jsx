import React from 'react';
import './scss/compactSection2.scss';

export default function CompactSection2Component({컴팩트, n}) {

    const [sortOrder, setSortOrder] =React.useState('new');
    const [sortDate, setSortData] =React.useState(컴팩트);

    React.useEffect(()=>{
        let arr = [...컴팩트];

        if(sortOrder==='asc'){
            arr.sort((a,b)=>a.price -b.price);
        }
        else if(sortOrder==='des'){
            arr.sort((a,b)=>b.price -a.price);
        }

        setSortData(arr);

    },[컴팩트, sortOrder])


    const onClickSort=(order)=>{
        setSortOrder(order);
    }
    

    return (
        <section id='compactSection2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="left">
                            <h2>제품<em>({n})</em></h2>
                        </div>
                        <div className="right">
                            <ul>
                                <li onClick={()=>onClickSort('new')} className={sortOrder==='new'?'on':''}><span>최신순</span></li>
                                <li onClick={()=>onClickSort('des')} className={sortOrder==='des'?'on':''}><span >높은 가격순</span></li>
                                <li onClick={()=>onClickSort('asc')} className={sortOrder==='asc'?'on':''}><span >낮은 가격순</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            {
                                sortDate.map((item,idx)=>{
                                    
                                    return(
                                        <li key={idx}>
                                            <a href="!#">
                                                <div className='img-box'>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="txt-box">
                                                    <h3>{item.product} <span>{item.soldout}</span></h3>
                                                    <p>{item.info}</p>
                                                </div>
                                                <div className="price">
                                                    <h4>{(item.price).toLocaleString()}<i>원</i></h4>
                                                </div>
                                                <em>{item.new}</em>
                                            </a>                            
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

