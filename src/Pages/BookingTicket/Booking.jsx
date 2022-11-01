import React, { Component } from 'react'
import './Booking.css'
import ThongTinGhe from './ThongTinGhe'
import danhSachHangGhe from '../../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class Booking extends Component {
   renderHangGhe = () => {
      return danhSachHangGhe.map((hangghe,index)=>{
        return <div key={index}>
          <HangGhe hangghe={hangghe} />
        </div>  
      })
  }
  render() {
  return (
	<div className='Booking' style={{position:"fixed",width:'100%',height:'100%',backgroundImage:"url('./img/bgmovie.jpg')",backgroundSize:'100%'}}>
    <div style={{position:"fixed",width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.8'}}>
        <div className="container-fluid">

        <div className="row">
          <div className="col-8 text-center">
            <div className='text-warning' style={{fontSize:'30px'}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
            <div className='text-light mt-3' style={{fontSize:'20px'}}>Màn hình</div>
            <div className='screen mx-auto mt-2'></div>
            {this.renderHangGhe()}
          </div>
          <div className="col-4 ">
          <div className='text-danger mt-5' style={{fontSize:'30px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
          <ThongTinGhe/>
          </div>
        </div>
        </div>
    </div>
  </div>
  )
}
}

 