import React from 'react';
import './scss/noticeView.scss';
import axios from 'axios';

export default function ViewComponent({setData, item}) {
    const onClickDel =(e)=>{
        e.preventDefault();
        
        
        const confirmed = window.confirm('정말로 삭제하시겠습니까?');
        if (!confirmed) {
            return; // 
        }

        axios({
            url:`/bbs/deleteAction.jsp`,
            method: 'POST',
            data:{},
            params: {
                "subject": item.제목,
                "content": item.내용,
                "bbsId":item.번호
            }
            
        })
        .then((res)=>{
    
            
            
            console.log( res );
            console.log( res.data );

            window.location.pathname='/SERVICE';
            // setMenu('글보기');

        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });
    }
    return (
        <div id='noticeView'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>{item.제목}</h2>
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <ul>
                                <li>
                                    <h3>등록일</h3>
                                    <span>{item.작성일}</span>
                                </li>
                                <li>
                                    <h3>조회수</h3>
                                    <span>{item.조회수}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="content-main">
                            <p>{item.내용}</p>
                        </div>
                        <div className="content-footer">
                            <div className="left-btn btns">
                                <button onClick={()=>window.location.pathname='/SERVICE'}>목록</button>
                            </div>
                            <div className="right-btn btns">
                                <button onClick={()=>setData('수정')}>수정</button>
                                <button onClick={onClickDel}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

