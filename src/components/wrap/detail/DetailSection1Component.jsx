import React from 'react';

export default function DetailSection1Component({dkey}) {

    const [state, setState] = React.useState({
        camera:{}
    });

    const {camera} = state;

    React.useEffect(()=>{
                
        if(localStorage.getItem(dkey) !== null){
            let result = JSON.parse(localStorage.getItem(dkey));
            setState({
                ...state,
                camera: result[0]
                
            })
            
        }
        
    },[dkey]);
   
    return (
        <section id='detailSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">상세페이지</div>
                    <div className="content">
                        <div className="left">
                            <figure><img src={camera.이미지} alt="" /></figure>
                        </div>
                                    <div className="right">
                                        <div className="row1">
                                            <span>{camera.신제품}</span>
                                            <h2>{camera.제품명}</h2>
                                            <h4>{camera.정보}</h4>
                                            <p>올인원 브이로그 카메라</p>
                                            <a href='!#'>공유</a>
                                        </div>
                                        <div className="row2">
                                            <h3>{camera.가격}</h3>
                                            <span>무료배송</span>
                                        </div>
                                        <div className="row3">
                                            <h3>회원별 마일리지 적립혜택</h3>
                                            <div className="sale">
                                                <span>4%</span>
                                                <span>2%</span>
                                            </div>
                                        </div>
                                        <div className="row4">
                                            <h3>색상</h3>
                                            <ul className="radio-box">
                                                <li>
                                                    <input type="radio" name='color' />
                                                    <span>화이트</span>
                                                </li>
                                                <li>
                                                    <input type="radio" name='color' />
                                                    <span>블랙</span>
                                                </li>                                        
                                            </ul>
                                        </div>
                                        <div className="row5">
                                            <h3>제품선택</h3>
                                            <select name="selectbox" id="selectbox">
                                                <option value="white"></option>
                                                <option value="blace"></option>
                                            </select>
                                        </div>
                                        <div className="row6">
                                            <h3>총 상품금액(총-개)</h3>
                                            <h3>-원</h3>
                                        </div>
                                        <div className="row7">
                                            <ul>
                                                <li>
                                                    <button>하트</button>
                                                </li>
                                                <li>
                                                    <button>장바</button>
                                                </li>
                                                <li>
                                                    <button>선물</button>
                                                </li>
                                                <li>
                                                    <button>일시품절</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                
                        
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

