import React from 'react';
import './scss/noticeView.scss';

export default function ViewComponent({setData}) {
    return (
        <div id='noticeView'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>제목</h2>
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <ul>
                                <li>
                                    <h3>등록일</h3>
                                    <span>작성일</span>
                                </li>
                                <li>
                                    <h3>조회수</h3>
                                    <span>조회수</span>
                                </li>
                            </ul>
                        </div>
                        <div className="content-main">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque amet blanditiis dignissimos expedita maiores minima asperiores ullam, vel incidunt. Perferendis fuga, aliquam et tempore ullam architecto necessitatibus doloremque soluta!</p>
                        </div>
                        <div className="content-footer">
                            <div className="left-btn btns">
                                <button onClick={()=>setData('공지사항')}>목록</button>
                            </div>
                            <div className="right-btn btns">
                                <button onClick={()=>setData('수정')}>수정</button>
                                <button >삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

