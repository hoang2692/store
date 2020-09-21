var defaultState = [
    {
        sp: {
            id:1,
            img: '../../img/hongtra_cam.png',
            name:'Hồng Trà Đác Cam',
            thongTin:'Forest Black Tea',
            gia: 65000,

        }
    },
    {
        sp: {
            id:2,
            img: '../../img/cf_sua.png',
            name:'Hồng Trà Sữa',
            thongTin:'Black Milk Tea',
            gia: 40000,

        },
    },
    {
        sp: {
            id:3,
            img: '../../img/dao_daxay.png',
            name:' Trà Đào Đá Xay',
            thongTin:'Peach Tea',
            gia:  65000 ,

        },
    },
    {
        sp: {
            id:4,
            img: '../../img/hoahong.png', 
            name:'   Trà Hoa Hồng',
            thongTin:'Rose Tea',
            gia: 45000,

        },
    }
]

const ThucUong = (state=defaultState,action) =>{
    switch(action.type)
    {
        default: return state;
    }
}


export default ThucUong;