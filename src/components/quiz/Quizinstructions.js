import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>Hướng dẫn</h1>
            <p>Đọc kĩ hướng dẫn để bắt đầu bài quiz</p>
            <ul className="browser-default" id="main-list">
                <li>Bài quiz có thời lượng 15 phút và kết thúc ngay khi hết thời gian của bạn.</li>
                <li>Mổi bài quiz có 10 câu hỏi.</li>
                
                    
                <img src={options} alt="Quiz App options example" />
                
                <li>
                Chọn đáp án trả lời đúng nhất cho câu hỏi.
                    <img src={answer} alt="Quiz App answer example" />
                </li>
                <li>
                    Mỗi bài quiz sẽ có 2 trợ giúp
                    <ul id="sublist">
                        <li>Có 2 cơ hội 50-50</li>
                        <li>Có 5 gợi ý</li>
                    </ul>
                </li>
                <li>
                Chọn trợ giúp 50-50 bằng cách nhấp vào biểu tượng
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    
                    <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example"/>
                </li>
                <li>
                Sử dụng gợi ý bằng cách nhấp vào biểu tượng
                    <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                    sẽ loại bỏ một câu trả lời sai để lại hai câu trả lời sai và một câu trả lời đúng. Bạn có thể sử dụng càng nhiều gợi ý càng tốt cho một câu hỏi.
                    <img src={hints} alt="Quiz App hints example" />
                </li>
                <li>Vui lòng thoát (hoặc dừng) bài quiz bất cứ lúc nào. Trong trường hợp đó, điểm số của bạn sẽ được tiết lộ sau đó.</li>
                <li>Đồng hồ bấm giờ bắt đầu ngay khi trò chơi tải.</li>
                <li>Hãy làm điều này nếu bạn nghĩ rằng bạn đã có những gì nó cần?</li>
            </ul>
            <div>
                <span className="left"><Link to="/">Quay về trang chủ</Link></span>
                <span className="right"><Link to="/play/quiz">Ok, bắt đầu thôi!</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions;