import React, { Component } from 'react'
import {connect} from 'react-redux'

class HangGhe extends Component {
	renderGhe =()=>{
		return this.props.hangghe.danhSachGhe.map((ghe,index)=>{
			if (this.props.hangghe.hang===''){
				return <button key={index} className='rowNumber' style={{marginLeft:'19px'}}>{ghe.soGhe}</button>
			}
			else{
				let cssDaDat=''
				let disabled=false
				if(ghe.daDat){
					cssDaDat= 'gheDuocChon'
					disabled= true
				}
				let cssGheDangDat=''
				let indexGheDangDat =this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe)
				if(indexGheDangDat !== -1){
					cssGheDangDat='gheDangChon'
				}
				return <button onClick={()=>{this.props.datGhe(ghe)}} key={index} disabled={disabled} className={`ghe ${cssDaDat} ${cssGheDangDat}`}>{ghe.soGhe}</button>
			}
		})
	}


  render() {
	return (
	  <div className='text-light text-left ml-3 mt-3' style={{fontSize:20}}>
		{this.props.hangghe.hang} {this.renderGhe()}
	  </div>
	)
  }
}


const mapStateToProps = state => {
	return {
		danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		datGhe: (ghe)=>{
			dispatch({
				type:'DAT_GHE',
			ghe
			})
		}
	}
}
export default connect (mapStateToProps,mapDispatchToProps) (HangGhe);