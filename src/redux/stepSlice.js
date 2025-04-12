import { createSlice } from "@reduxjs/toolkit";

const ly_do_viral_prompt=
`
Đối tượng khách hàng: <span class="font-bold doiTuongKH">doiTuongKH</span> <br/>
Tôi là <span class="font-bold toiLa">toiLa</span> xuất sắc, hãy phân tích thật kỹ lý do kịch bản của video này lên xu hướng bằng <span class="font-bold ngonNguDich">ngonNguDich</span> (thuật ngữ chuyên ngành hoặc chuyên môn có thể sử dụng <span class="font-bold ngonNguChuyenNganh">ngonNguChuyenNganh</span>)<br/>

Đây là kịch bản: <span class="font-bold kichBanMau">kichBanMau</span>`;
const viet_lai_dan_y_prompt=
`Bước 2:
Bạn là __toi_la__ trong __linh_vuc__ hãy giúp tôi viết lại cấu trúc dàn ý kịch bản mẫu này bằng __ngon_ngu_dich__ ( thuật ngữ chuyên ngành hoặc chuyên môn có thể sử dụng __ngon_ngu_chuyen_nganh__), để tôi có thể áp dụng cho những content khác. Sử dụng những nội dung trích từ kịch bản mẫu và đã chỉnh sử chính tả để làm ví dụ.
Đây là kịch bản mẫu:`;
const viet_lai_kich_ban_prompt=
`Bước 3:
Bạn là __toi_la__, hãy giúp tôi viết kịch bản video ngắn có độ dài khoảng 50 từ bằng __ngon_ngu_dich__ (thuật ngữ chuyên môn có thể sử dụng __ngon_ngu_chuyen_nganh__), có khả năng viral cao từ việc tham khảo 4 nguồn thông tin mà tôi cung cấp (kịch bản mẫu, lý do viral, cấu trúc dàn ý).
Kịch bản chỉ có lời thoại, để trí tuệ nhân tạo có thể tạo giọng đọc ngay, giọng điệu giống con người nhất có thể. Giọng văn nói của __doi_tuong_AI__, có thể sử dụng vài từ bằng __ngon_ngu_chuyen_nganh__ trong kịch bản mẫu áp dụng vào kịch bản mà bạn viết lại để thể hiện sự chuyên nghiệp.
-Câu mở đầu kịch bản sử dụng luôn ví dụ phần mở đầu của cấu trúc dàn ý.
-Kịch bản hoàn thành không được có chữ mở bài, thân bài, kết bài, không được xuống dòng phân đoạn văn bản, không dùng ký tự đặc biệt. Tuyệt đối không sử dấu ngoặc kép trong văn bản trả về.
Đây là:
Kịch bản mẫu:__kich_ban_mau__
Lý do viral:__ly_do_viral__
Cấu trúc dàn ý: __cau_truc_dan_y__`
const kich_ban_mau=`Top 10 sự thật về loài mèo mà có thể bạn chưa biết 1. Mèo có sức nhìn tốt hơn người trong bóng tối 2. Mèo không thể nhìn thấy màu đỏ 3. Mèo không ăn đường vì không cảm nhận được vị ngọt 4. Mèo có hơn 100 âm thanh để giao tiếp với đồng loại 5. Mèo không thích nước vì lớp lông của chúng sẽ không thể giữ ấm khi ướt 6. Mèo cũng có ngón tay cái nhưng không sử dụng được 7. Mèo có thể ngủ từ 13 đến 14 giờ mỗi ngày 8. Mèo thường hay thở ra tiếng gừ nhỏ mỗi khi chúng ngủ hoặc nái ngủ 9. Nếu một chú mèo nháy mắt với bạn có nghĩa là nó đang yêu bạn Và cuối cùng, mèo có thể học cách giao tiếp với con người Và đây là...`

const initialState={
   kich_ban:kich_ban_mau,
   ly_do_viral_prompt:ly_do_viral_prompt,
   viet_lai_dan_y_prompt:viet_lai_dan_y_prompt,
   viet_lai_kich_ban_prompt:viet_lai_kich_ban_prompt
};

const stepSlice=createSlice({
    name:"stepSlice",
    initialState:initialState,
    reducers:{
        them_kich_ban_mau:(state,action)=>{
            const kich_ban_mau=action.payload;
            state.kich_ban=kich_ban_mau
        }
    },
})
const stepReducer=stepSlice.reducer
const {them_kich_ban_mau}=stepSlice.actions
export {stepReducer, them_kich_ban_mau}