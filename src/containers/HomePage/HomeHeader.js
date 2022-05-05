import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>

                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='chirld-content'>
                                <div className='sub-title'><b>Chuyên khoa</b></div>
                                <div>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='chirld-content'>
                                <div className='sub-title'><b>Cơ sở y tế</b></div>
                                <div>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='chirld-content'>
                                <div className='sub-title'><b>Bác sĩ</b></div>
                                <div>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='chirld-content'>
                                <div className='sub-title'><b>Gói khám</b></div>
                                <div>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                Hỗ trợ
                            </div>
                            <div className='flag'>
                                VN
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>NỀN TẢNG Y TẾ</div>
                        <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm gói khám' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-chirld'>
                                <div className='icon-chirld'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-chirld'>
                                    Khám Chuyên khoa
                                </div>
                            </div>
                            <div className='option-chirld'>
                                <div className='icon-chirld'>
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className='text-chirld'>
                                    Khám từ xa
                                </div>
                            </div>
                            <div className='option-chirld'>
                                <div className='icon-chirld'>
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-chirld'>
                                    Khám tổng quát
                                </div>
                            </div>
                            <div className='option-chirld'>
                                <div className='icon-chirld'>
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <div className='text-chirld'>
                                    Xét nghiệm y học
                                </div>
                            </div>
                            <div className='option-chirld'>
                                <div className='icon-chirld'>
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <div className='text-chirld'>
                                    Sức khỏe tinh thần
                                </div>
                            </div>
                            <div className='option-chirld'>
                                <div className='icon-chirld'>
                                    <i class="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-chirld'>
                                    Khám nha khoa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
