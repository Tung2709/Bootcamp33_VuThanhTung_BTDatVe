import React, { Component } from 'react'
import { connect } from 'react-redux'
 class ThongTinGhe extends Component {
	render() {
		return (
			<div>
				<div className=' mt-5'>
					<button className='gheDuocChon'></button><span className='text-light ml-3' style={{ fontSize: '20px' }}>Ghế đã đặt</span>
					<br />
					<button className='gheDangChon mt-2'></button><span className='text-light ml-3' style={{ fontSize: '20px' }}>Ghế đang chọn</span>
					<br />
					<button className='ghe mt-2' style={{ marginLeft: '0px' }}></button><span className='text-light ml-3' style={{ fontSize: '20px' }}>Ghế chưa đặt</span>
				</div>
				<div className='mt-5'>
					<table className="table" border="2" borderColor='white'>
						<thead>
							<tr className='text-light' style={{fontSize:'20px'}}>
								<th>Số ghế</th>
								<th>Giá</th>
								<th></th>
							</tr>
						</thead>
						<tbody className='text-warning'>
							{this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
								return <tr className='text-light' key={index}>
								<td>{gheDangDat.soGhe}</td>
								<td>{gheDangDat.gia}</td>
								<td><button onClick={()=>{
									this.props.huyGhe(gheDangDat)
								}}>Hủy</button></td>
							</tr>
							})}
						</tbody>
						<tfoot>
							<tr className='text-warning'>
								<td></td>
								<td>Tổng tiền</td>
								<td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
									return tongTien += gheDangDat.gia
								},0).toLocaleString()}</td>
							</tr>
						</tfoot>
					</table>

				</div>
			</div>
		)
	}
}

const mapStateToProps = state =>{
	return {
		danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		huyGhe: (ghe)=>{
			dispatch({
				type:'HUY_GHE',
			soGhe:ghe.soGhe
			})
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps )(ThongTinGhe)