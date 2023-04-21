const { TEST_PACKAGE } = require('../migrations/table_name');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(TEST_PACKAGE, [
            {
                testPackageId: '146a1daf-757f-45a1-90ae-cc9e7399a80a',
                name: 'Gói thăm khám tại nhà',
                price: "500.000đ",
                description: `Trong những năm gần đây, thăm khám chữa bệnh tại nhà đã là một dịch vụ trở nên quen thuộc tại thành phố Hồ Chí Minh. Dịch vụ này mang lại rất nhiều lợi ích cho người bệnh. Đó là người bệnh không phải mất nhiều thời gian chờ đợi khám bệnh, không phải đi đến bệnh viện trong điều kiện khó khăn về di chuyển, đặc biệt những trường hợp người già không đi lại được hoặc trẻ em còn nhỏ tuổi việc đi lại đến viện sẽ tốn nhiều nhân lực, thời gian của gia đình. Trong khi mọi người đều bận nhiều công việc, sử dụng dịch vụ khám bệnh tại nhà là một giải pháp tối ưu.
                Các bác sĩ tham gia dịch vụ thăm  khám, chữa bệnh tại nhà  là các bác sĩ có nhiều kinh nghiệm trong khám chữa bệnh, kiến thức vững vàng, tận tâm, vui vẻ, dễ tiếp xúc.
                Khi có nhu cầu khám bệnh tại nhà hãy gọi đến số điện thoại liên hệ: 0965991111 của ứng dụng DR.OH Bệnh Viện Đa Khoa Bỏ Túi. Một cách nhanh chóng bộ phận tiếp nhận thông tin ban đầu từ người bệnh, sẽ chuyển đến bác sĩ chuyên khoa có liên quan tư vấn trước khi đến khám bệnh cho bạn. Dịch vụ Khám bệnh tại nhà sẽ có bác sĩ và điều dưỡng đến thăm khám bệnh.
                Các bác sĩ có nhiều kinh nghiệm khám bệnh tại nhà: khám, đo huyết áp, nhiệt độ,  lấy mẫu máu, nước tiểu để xét nghiệm, nghe tim phổi, thăm hỏi tiền sử bệnh tật, dùng thuốc trước đó,... tương đương một phòng khám di động. Bác sĩ cũng sẽ tư vấn cho các thành viên khác trong gia đình.
                Với cơ sở vật chất, phương tiện sẵn có của bệnh viện như xe cấp cứu, máy chụp CT MRI, X quang, phòng xét nghiệm hiện đại, đội ngũ bác sĩ chyên về khám và điều trị, phẫu thuật,… và những dụng cụ y tế cần thiết để khám bệnh có thể xử trí ngay tại chỗ các bệnh lý thông thường hoặc xử trí cấp cứu, điều trị tại bệnh viện nhanh khi cần thiết.
                Để được hỗ trợ tốt hơn, quý khách hàng vui lòng thực hiện theo các bước sau đây:
                
                Bước 1: Đăng ký trên APP DR.OH Dịch vụ xét nghiệm tại nhà
                
                Bước 2: Chuyên viên tư vấn xác nhận
                
                Bước 3: Bác sỹ và điều dưỡng đến nhà thực hiện chuyên môn
                
                Bước 4: Kết quả khi có sẽ thông báo trả tại APP
                
                Bước 5: Khách hàng có thể đặt câu hỏi, chat, video call trực tiếp với bác sĩ trên APP  DR.OH  để được hỗ trợ những thắc mắc.`,
                hospitalId: '8e8e67e0-b971-4efc-b563-587d6e5675d3'
            },
            {
                testPackageId: 'aa2ea854-ad74-4af7-bf81-e5caa8c8fc89',
                name: 'Gói thăm khám và xét nghiệm tại nhà',
                price: "700.000đ",
                description: `Trong những năm gần đây, thăm khám chữa bệnh tại nhà đã là một dịch vụ trở nên quen thuộc tại thành phố Hồ Chí Minh. Dịch vụ này mang lại rất nhiều lợi ích cho người bệnh. Đó là người bệnh không phải mất nhiều thời gian chờ đợi khám bệnh, không phải đi đến bệnh viện trong điều kiện khó khăn về di chuyển, đặc biệt những trường hợp người già không đi lại được hoặc trẻ em còn nhỏ tuổi việc đi lại đến viện sẽ tốn nhiều nhân lực, thời gian của gia đình. Trong khi mọi người đều bận nhiều công việc, sử dụng dịch vụ khám bệnh tại nhà là một giải pháp tối ưu.
                Các bác sĩ tham gia dịch vụ thăm  khám, chữa bệnh tại nhà  là các bác sĩ có nhiều kinh nghiệm trong khám chữa bệnh, kiến thức vững vàng, tận tâm, vui vẻ, dễ tiếp xúc.
                Khi có nhu cầu khám bệnh tại nhà hãy gọi đến số điện thoại liên hệ: 0965991111 của ứng dụng DR.OH Bệnh Viện Đa Khoa Bỏ Túi. Một cách nhanh chóng bộ phận tiếp nhận thông tin ban đầu từ người bệnh, sẽ chuyển đến bác sĩ chuyên khoa có liên quan tư vấn trước khi đến khám bệnh cho bạn. Dịch vụ Khám bệnh tại nhà sẽ có bác sĩ và điều dưỡng đến thăm khám bệnh.
                Các bác sĩ có nhiều kinh nghiệm khám bệnh tại nhà: khám, đo huyết áp, nhiệt độ,  lấy mẫu máu, nước tiểu để xét nghiệm, nghe tim phổi, thăm hỏi tiền sử bệnh tật, dùng thuốc trước đó,... tương đương một phòng khám di động. Bác sĩ cũng sẽ tư vấn cho các thành viên khác trong gia đình.
                Với cơ sở vật chất, phương tiện sẵn có của bệnh viện như xe cấp cứu, máy chụp CT MRI, X quang, phòng xét nghiệm hiện đại, đội ngũ bác sĩ chyên về khám và điều trị, phẫu thuật,… và những dụng cụ y tế cần thiết để khám bệnh có thể xử trí ngay tại chỗ các bệnh lý thông thường hoặc xử trí cấp cứu, điều trị tại bệnh viện nhanh khi cần thiết.
                Để được hỗ trợ tốt hơn, quý khách hàng vui lòng thực hiện theo các bước sau đây:
                
                Bước 1: Đăng ký trên APP DR.OH Dịch vụ xét nghiệm tại nhà
                
                Bước 2: Chuyên viên tư vấn xác nhận
                
                Bước 3: Bác sỹ và điều dưỡng đến nhà thực hiện chuyên môn
                
                Bước 4: Kết quả khi có sẽ thông báo trả tại APP
                
                Bước 5: Khách hàng có thể đặt câu hỏi, chat, video call trực tiếp với bác sĩ trên APP  DR.OH  để được hỗ trợ những thắc mắc.`,
                hospitalId: 'cca2c6dc-f9dc-4560-ab75-154fcfeb529c'
            },
            {
                testPackageId: '00a91f89-d878-4330-a84c-201290d095e0',
                name: 'Gói khám tai mũi họng tại nhà',
                price: "540.000đ",
                description: `Trong những năm gần đây, thăm khám chữa bệnh tại nhà đã là một dịch vụ trở nên quen thuộc tại thành phố Hồ Chí Minh. Dịch vụ này mang lại rất nhiều lợi ích cho người bệnh. Đó là người bệnh không phải mất nhiều thời gian chờ đợi khám bệnh, không phải đi đến bệnh viện trong điều kiện khó khăn về di chuyển, đặc biệt những trường hợp người già không đi lại được hoặc trẻ em còn nhỏ tuổi việc đi lại đến viện sẽ tốn nhiều nhân lực, thời gian của gia đình. Trong khi mọi người đều bận nhiều công việc, sử dụng dịch vụ khám bệnh tại nhà là một giải pháp tối ưu.
                Các bác sĩ tham gia dịch vụ thăm  khám, chữa bệnh tại nhà  là các bác sĩ có nhiều kinh nghiệm trong khám chữa bệnh, kiến thức vững vàng, tận tâm, vui vẻ, dễ tiếp xúc.
                Khi có nhu cầu khám bệnh tại nhà hãy gọi đến số điện thoại liên hệ: 0965991111 của ứng dụng DR.OH Bệnh Viện Đa Khoa Bỏ Túi. Một cách nhanh chóng bộ phận tiếp nhận thông tin ban đầu từ người bệnh, sẽ chuyển đến bác sĩ chuyên khoa có liên quan tư vấn trước khi đến khám bệnh cho bạn. Dịch vụ Khám bệnh tại nhà sẽ có bác sĩ và điều dưỡng đến thăm khám bệnh.
                Các bác sĩ có nhiều kinh nghiệm khám bệnh tại nhà: khám, đo huyết áp, nhiệt độ,  lấy mẫu máu, nước tiểu để xét nghiệm, nghe tim phổi, thăm hỏi tiền sử bệnh tật, dùng thuốc trước đó,... tương đương một phòng khám di động. Bác sĩ cũng sẽ tư vấn cho các thành viên khác trong gia đình.
                Với cơ sở vật chất, phương tiện sẵn có của bệnh viện như xe cấp cứu, máy chụp CT MRI, X quang, phòng xét nghiệm hiện đại, đội ngũ bác sĩ chyên về khám và điều trị, phẫu thuật,… và những dụng cụ y tế cần thiết để khám bệnh có thể xử trí ngay tại chỗ các bệnh lý thông thường hoặc xử trí cấp cứu, điều trị tại bệnh viện nhanh khi cần thiết.
                Để được hỗ trợ tốt hơn, quý khách hàng vui lòng thực hiện theo các bước sau đây:
                
                Bước 1: Đăng ký trên APP DR.OH Dịch vụ xét nghiệm tại nhà
                
                Bước 2: Chuyên viên tư vấn xác nhận
                
                Bước 3: Bác sỹ và điều dưỡng đến nhà thực hiện chuyên môn
                
                Bước 4: Kết quả khi có sẽ thông báo trả tại APP
                
                Bước 5: Khách hàng có thể đặt câu hỏi, chat, video call trực tiếp với bác sĩ trên APP  DR.OH  để được hỗ trợ những thắc mắc.`,
                hospitalId: 'cca2c6dc-f9dc-4560-ab75-154fcfeb529c'
            },
            {
                testPackageId: '8a8dac8d-450a-4f82-a2df-3a3993cb6d1a',
                name: 'Gói test Covid tại nhà',
                price: "200.000đ",
                description: `Trong những năm gần đây, thăm khám chữa bệnh tại nhà đã là một dịch vụ trở nên quen thuộc tại thành phố Hồ Chí Minh. Dịch vụ này mang lại rất nhiều lợi ích cho người bệnh. Đó là người bệnh không phải mất nhiều thời gian chờ đợi khám bệnh, không phải đi đến bệnh viện trong điều kiện khó khăn về di chuyển, đặc biệt những trường hợp người già không đi lại được hoặc trẻ em còn nhỏ tuổi việc đi lại đến viện sẽ tốn nhiều nhân lực, thời gian của gia đình. Trong khi mọi người đều bận nhiều công việc, sử dụng dịch vụ khám bệnh tại nhà là một giải pháp tối ưu.
                Các bác sĩ tham gia dịch vụ thăm  khám, chữa bệnh tại nhà  là các bác sĩ có nhiều kinh nghiệm trong khám chữa bệnh, kiến thức vững vàng, tận tâm, vui vẻ, dễ tiếp xúc.
                Khi có nhu cầu khám bệnh tại nhà hãy gọi đến số điện thoại liên hệ: 0965991111 của ứng dụng DR.OH Bệnh Viện Đa Khoa Bỏ Túi. Một cách nhanh chóng bộ phận tiếp nhận thông tin ban đầu từ người bệnh, sẽ chuyển đến bác sĩ chuyên khoa có liên quan tư vấn trước khi đến khám bệnh cho bạn. Dịch vụ Khám bệnh tại nhà sẽ có bác sĩ và điều dưỡng đến thăm khám bệnh.
                Các bác sĩ có nhiều kinh nghiệm khám bệnh tại nhà: khám, đo huyết áp, nhiệt độ,  lấy mẫu máu, nước tiểu để xét nghiệm, nghe tim phổi, thăm hỏi tiền sử bệnh tật, dùng thuốc trước đó,... tương đương một phòng khám di động. Bác sĩ cũng sẽ tư vấn cho các thành viên khác trong gia đình.
                Với cơ sở vật chất, phương tiện sẵn có của bệnh viện như xe cấp cứu, máy chụp CT MRI, X quang, phòng xét nghiệm hiện đại, đội ngũ bác sĩ chyên về khám và điều trị, phẫu thuật,… và những dụng cụ y tế cần thiết để khám bệnh có thể xử trí ngay tại chỗ các bệnh lý thông thường hoặc xử trí cấp cứu, điều trị tại bệnh viện nhanh khi cần thiết.
                Để được hỗ trợ tốt hơn, quý khách hàng vui lòng thực hiện theo các bước sau đây:
                
                Bước 1: Đăng ký trên APP DR.OH Dịch vụ xét nghiệm tại nhà
                
                Bước 2: Chuyên viên tư vấn xác nhận
                
                Bước 3: Bác sỹ và điều dưỡng đến nhà thực hiện chuyên môn
                
                Bước 4: Kết quả khi có sẽ thông báo trả tại APP
                
                Bước 5: Khách hàng có thể đặt câu hỏi, chat, video call trực tiếp với bác sĩ trên APP  DR.OH  để được hỗ trợ những thắc mắc.`,
                hospitalId: 'f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd'
            },
            {
                testPackageId: '542ed848-1098-4c59-8b84-6db2e783f7f0',
                name: 'Gói thăm khám phụ khoa tại nhà',
                price: "550.000đ",
                description: `Trong những năm gần đây, thăm khám chữa bệnh tại nhà đã là một dịch vụ trở nên quen thuộc tại thành phố Hồ Chí Minh. Dịch vụ này mang lại rất nhiều lợi ích cho người bệnh. Đó là người bệnh không phải mất nhiều thời gian chờ đợi khám bệnh, không phải đi đến bệnh viện trong điều kiện khó khăn về di chuyển, đặc biệt những trường hợp người già không đi lại được hoặc trẻ em còn nhỏ tuổi việc đi lại đến viện sẽ tốn nhiều nhân lực, thời gian của gia đình. Trong khi mọi người đều bận nhiều công việc, sử dụng dịch vụ khám bệnh tại nhà là một giải pháp tối ưu.
                Các bác sĩ tham gia dịch vụ thăm  khám, chữa bệnh tại nhà  là các bác sĩ có nhiều kinh nghiệm trong khám chữa bệnh, kiến thức vững vàng, tận tâm, vui vẻ, dễ tiếp xúc.
                Khi có nhu cầu khám bệnh tại nhà hãy gọi đến số điện thoại liên hệ: 0965991111 của ứng dụng DR.OH Bệnh Viện Đa Khoa Bỏ Túi. Một cách nhanh chóng bộ phận tiếp nhận thông tin ban đầu từ người bệnh, sẽ chuyển đến bác sĩ chuyên khoa có liên quan tư vấn trước khi đến khám bệnh cho bạn. Dịch vụ Khám bệnh tại nhà sẽ có bác sĩ và điều dưỡng đến thăm khám bệnh.
                Các bác sĩ có nhiều kinh nghiệm khám bệnh tại nhà: khám, đo huyết áp, nhiệt độ,  lấy mẫu máu, nước tiểu để xét nghiệm, nghe tim phổi, thăm hỏi tiền sử bệnh tật, dùng thuốc trước đó,... tương đương một phòng khám di động. Bác sĩ cũng sẽ tư vấn cho các thành viên khác trong gia đình.
                Với cơ sở vật chất, phương tiện sẵn có của bệnh viện như xe cấp cứu, máy chụp CT MRI, X quang, phòng xét nghiệm hiện đại, đội ngũ bác sĩ chyên về khám và điều trị, phẫu thuật,… và những dụng cụ y tế cần thiết để khám bệnh có thể xử trí ngay tại chỗ các bệnh lý thông thường hoặc xử trí cấp cứu, điều trị tại bệnh viện nhanh khi cần thiết.
                Để được hỗ trợ tốt hơn, quý khách hàng vui lòng thực hiện theo các bước sau đây:
                
                Bước 1: Đăng ký trên APP DR.OH Dịch vụ xét nghiệm tại nhà
                
                Bước 2: Chuyên viên tư vấn xác nhận
                
                Bước 3: Bác sỹ và điều dưỡng đến nhà thực hiện chuyên môn
                
                Bước 4: Kết quả khi có sẽ thông báo trả tại APP
                
                Bước 5: Khách hàng có thể đặt câu hỏi, chat, video call trực tiếp với bác sĩ trên APP  DR.OH  để được hỗ trợ những thắc mắc.`,
                hospitalId: '4ef9c725-d451-473a-b9bd-b0b6e05db155'
            },
            {
                testPackageId: '5957f864-00d3-41bd-bd04-fa68da7c795f',
                name: 'Gói thăm khám sức khỏe tại nhà',
                price: "400.000đ",
                description: `Trong những năm gần đây, thăm khám chữa bệnh tại nhà đã là một dịch vụ trở nên quen thuộc tại thành phố Hồ Chí Minh. Dịch vụ này mang lại rất nhiều lợi ích cho người bệnh. Đó là người bệnh không phải mất nhiều thời gian chờ đợi khám bệnh, không phải đi đến bệnh viện trong điều kiện khó khăn về di chuyển, đặc biệt những trường hợp người già không đi lại được hoặc trẻ em còn nhỏ tuổi việc đi lại đến viện sẽ tốn nhiều nhân lực, thời gian của gia đình. Trong khi mọi người đều bận nhiều công việc, sử dụng dịch vụ khám bệnh tại nhà là một giải pháp tối ưu.
                Các bác sĩ tham gia dịch vụ thăm  khám, chữa bệnh tại nhà  là các bác sĩ có nhiều kinh nghiệm trong khám chữa bệnh, kiến thức vững vàng, tận tâm, vui vẻ, dễ tiếp xúc.
                Khi có nhu cầu khám bệnh tại nhà hãy gọi đến số điện thoại liên hệ: 0965991111 của ứng dụng DR.OH Bệnh Viện Đa Khoa Bỏ Túi. Một cách nhanh chóng bộ phận tiếp nhận thông tin ban đầu từ người bệnh, sẽ chuyển đến bác sĩ chuyên khoa có liên quan tư vấn trước khi đến khám bệnh cho bạn. Dịch vụ Khám bệnh tại nhà sẽ có bác sĩ và điều dưỡng đến thăm khám bệnh.
                Các bác sĩ có nhiều kinh nghiệm khám bệnh tại nhà: khám, đo huyết áp, nhiệt độ,  lấy mẫu máu, nước tiểu để xét nghiệm, nghe tim phổi, thăm hỏi tiền sử bệnh tật, dùng thuốc trước đó,... tương đương một phòng khám di động. Bác sĩ cũng sẽ tư vấn cho các thành viên khác trong gia đình.
                Với cơ sở vật chất, phương tiện sẵn có của bệnh viện như xe cấp cứu, máy chụp CT MRI, X quang, phòng xét nghiệm hiện đại, đội ngũ bác sĩ chyên về khám và điều trị, phẫu thuật,… và những dụng cụ y tế cần thiết để khám bệnh có thể xử trí ngay tại chỗ các bệnh lý thông thường hoặc xử trí cấp cứu, điều trị tại bệnh viện nhanh khi cần thiết.
                Để được hỗ trợ tốt hơn, quý khách hàng vui lòng thực hiện theo các bước sau đây:
                
                Bước 1: Đăng ký trên APP DR.OH Dịch vụ xét nghiệm tại nhà
                
                Bước 2: Chuyên viên tư vấn xác nhận
                
                Bước 3: Bác sỹ và điều dưỡng đến nhà thực hiện chuyên môn
                
                Bước 4: Kết quả khi có sẽ thông báo trả tại APP
                
                Bước 5: Khách hàng có thể đặt câu hỏi, chat, video call trực tiếp với bác sĩ trên APP  DR.OH  để được hỗ trợ những thắc mắc.`,
                hospitalId: '4fab9aca-acd3-4956-8e83-cabf6213559f'
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(TEST_PACKAGE, null, {});
    }
};