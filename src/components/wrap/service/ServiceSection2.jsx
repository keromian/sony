import React from 'react';
import './scss/ServiceSection2.scss'
import $ from 'jquery';

export default function ServiceSection2({FAQ, data, Notice}) {

    const [sortOrder, setSortOrder] =React.useState('전체');
    const [sortData, setSortData] =React.useState(FAQ);
    const [leng, setLeng]=React.useState(0);
    React.useEffect(()=>{
        const notice1=$('.notice1') ;
        let arr = [...FAQ];

        notice1.removeClass('on')
        
        if(sortOrder==='주문/결제'){
            arr = arr.filter(item => item.nav === '주문/결제')   
                     
        }
        else if(sortOrder==='세금계산서/영수증'){
            arr = arr.filter(item => item.nav === '세금계산서/영수증')
        }
        else if(sortOrder==='배송'){
            arr = arr.filter(item => item.nav === '배송')
        }
        else if(sortOrder==='취소/환불/AS'){
            arr = arr.filter(item => item.nav === '취소/환불/AS')
        }
        else if(sortOrder==='회원관련'){
            arr = arr.filter(item => item.nav === '회원관련')
        }
        else if(sortOrder==='쿠폰/마일리지'){
            arr = arr.filter(item => item.nav === '쿠폰/마일리지')
        }
        else{
            arr = FAQ;
        }

        setSortData(arr);
        setLeng(arr.length);

    },[FAQ, sortOrder])


    const onClickBtn=(order)=>{
        setSortOrder(order);
    }

    React.useEffect(()=>{
        const navBtn=$('.nav button');
        const notice1A=$('.notice1 a');

        navBtn.on({
            click(){
                navBtn.removeClass('on');
                $(this).addClass('on');
            }
        })
        notice1A.on({
            click(e){
                e.preventDefault();
                $(this).toggleClass('on');
            }
        })
    })


    const [list] = React.useState(5);  // 한화면에 보여질 목록개수
    const [pageNumber, setPageNumber] = React.useState(1); // 페이지번호
    const [groupPage] = React.useState(3); // 페이지번호 그룹1(1(1~5) 그룹2(6!~10) 그룹3(11~15) 그룹4(16~20))
    const [cnt, setCnt] = React.useState(1); // 페이지번호 그룹 1

    const [startNum, setStartNum] = React.useState(); // 그룹 시작 번호
    const [endtNum, setEndtNum] = React.useState();  // 그룹 끝 번호

    //  페이지번호 클릭 이벤트
    const onClickPageNum=(e, num)=>{
        e.preventDefault();
        setPageNumber(num);
    }

    // 그룹페이지 클릭  다음카운트 이벤트
    const onClickNextGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
    }

    // 그룹페이지 클릭  이전카운트 이벤트
    const onClickPrevGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
    }

    // 그룹 시작번호 설정 => cnt 또는 groupPage 값 변경이 있거나 설정되었다면 시작번호 설정 실행
    React.useEffect(()=>{
        setStartNum( (cnt-1)*groupPage );
    },[cnt, groupPage]);

    // 그룹 끝번호 설정
    React.useEffect(()=>{
        setEndtNum( startNum + groupPage );
    },[startNum, groupPage]);
    
    // 그룹 시작페이지 설정 => 그룹페이지 이동시 그룹의 첫페이지 설정
    React.useEffect(()=>{
        setPageNumber(startNum+1);
    },[endtNum, startNum]);

    React.useEffect(()=>{
        const expand=$('.expand') ;
        const notice1=$('.notice1') ;
        expand.on({
            click(e){
                $(this).toggleClass('on');
                notice1.toggleClass('on');
            }
        })
    },[sortData])
    

    return (
        <section id='serviceSection2'>
            <div className="container">
                <div className="gap">
                    { data?
                    <>
                    <div className="title hide">FAQ</div>
                    <div className="content">
                        <div className="nav">
                            <button onClick={()=>onClickBtn('전체')} className='on'>전체</button>
                            <button onClick={()=>onClickBtn('주문/결제')}>주문/결제</button>
                            <button onClick={()=>onClickBtn('세금계산서/영수증')}>세금계산서/영수증</button>
                            <button onClick={()=>onClickBtn('배송')}>배송</button>
                            <button onClick={()=>onClickBtn('취소/환불/AS')}>취소/환불/AS</button>
                            <button onClick={()=>onClickBtn('회원관련')}>회원관련</button>
                            <button onClick={()=>onClickBtn('쿠폰/마일리지')}>쿠폰/마일리지</button>
                        </div>
                        <div className="notice1">
                            <ul>
                                {
                                    sortData.map((item, idx)=>{
                                        
                                        return(
                                            <li key={idx}>
                                                <a href='!#'>
                                                    <dl>
                                                        <dt>{item.nav}</dt>
                                                        <dd><em>Q.</em>{item.detail} <span><img src="./img/service/icon_down.png" alt="" /></span></dd>
                                                        <dd></dd>
                                                    </dl>
                                                    <div className="inner">
                                                        <p>{item.inner1}</p>
                                                        <p>{item.inner2}</p>
                                                    </div>
                                                </a>
                                                
                                            </li>
                                        )
                                        
                                    
                                        
                                    })
                                }
                                
                            </ul>
                        </div>
                        {
                            leng>=9 &&
                        <div className="expand">
                            
                            <button  className='plus-btn'>펼치기 +</button>
                            <button className='minus-btn'>접기 -</button>
                            
                        </div>
                        }
                    </div>
                    </>
                    :
                    <>
                    <div className="title hide">공지사항</div>
                    <div className="content">                        
                        <div className="notice2">
                            <dl>
                                <dt>
                                    <span>번호</span>
                                    <span>제목</span>
                                    <span>등록일</span>
                                    <span>조회수</span>
                                </dt>
                                {
                                Notice.map((item,idx)=>{
                                    if( Math.ceil((idx+1)/list) === pageNumber ){
                                    return(
                                        <a href="!#" key={idx}>
                                            <dd>
                                                <span>{item.번호}</span>
                                                <span>{item.제목}</span>
                                                <span>{item.등록일}</span>
                                                <span>{item.조회수}</span>
                                            </dd>
                                        </a>
                                    )
                                    }
                                })
                                   
                                }                             
                            </dl>
                            <div className="page-button-box">
                                <div className="prev-btn-box">
                                    { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                </div>                                
                                <div className='num-btn-box'>
                                {
                                (()=>{
                                        let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                        for(let i=startNum; i<endtNum; i++){                                    
                                            if(i<Math.ceil(Notice.length/list)){ // 100/6
                                                arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                            }
                                        }
                                        return  arr                                                                      
                                })() 
                                }                        
                                </div>
                                <div className="next-btn-box">
                                    {cnt < Math.ceil(Notice.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                </div> 
                            </div> 
                        </div>
                    </div>
                    </>
                    }
                </div>
            </div>
        </section>
    );
}

