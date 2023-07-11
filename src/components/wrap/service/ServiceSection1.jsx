import React from 'react';
import './scss/ServiceSection1.scss';
import $ from 'jquery';

export default function ServiceSection1({onClickTrue, onClickFalse}) {
    React.useEffect(()=>{
        const serviceBtn = $('#serviceSection1 button')
        serviceBtn.on({
            click(){
                serviceBtn.removeClass('on');
                $(this).addClass('on');
            }
        })
    })
    return (
        <section id='serviceSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>FAQ & 공지사항</h1>
                        <p>소니스토어에 많이 물어보시는 질문과 새로운 소식을 만나보세요.</p>
                    </div>
                    <div className="content">
                        <button onClick={onClickTrue} className='on'>FAQ</button>
                        <button onClick={onClickFalse} >공지사항</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

