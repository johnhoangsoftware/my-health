const { HOSPITAL } = require('../migrations/table_name');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(HOSPITAL, [
      {
        hospitalId: "f7fdfaf0-7f60-44b6-8d37-69c47c2c21cd",
        name: "Bệnh viện Hồng Đức 2",
        address: "Thành phố Hồ Chí Minh",
        avatar: '',
        description: 'Ra đời từ tháng 09 năm 2000 Bệnh Viện Đa Khoa Hồng Đức là nơi khám chữa bệnh uy tín và chăm sóc khách hàng đáng tin cậy. Chúng tôi có mặt để đáp ứng nhu cầu sử dụng dịch vụ Y khoa chất lượng cao, cùng với thái độ tận tâm lấy sự hài lòng của khách hàng làm thước đo cho chất lượng dịch vụ, không ngừng nỗ lực để phục vụ công đồng tốt hơn và thực hiện chính sách của nhà nước về việc giảm tải trọng cho bệnh nhân tại các bệnh viện lớn trong thành phố. Bệnh viện được xây dựng theo tiêu chuẩn của Bộ Y Tế về cả kiến trúc xây dựng lẫn yêu cầu chuyên môn của một bệnh viện, phù hợp với những quy định của những tổ chức tín nhiệm khác nhau trên thế giới, hiện tại với 25 Khoa Phòng Bệnh Viện Hồng Đức 3 được trang bị đồng bộ với kỹ thuật và công nghệ y khoa hiện đại, tự hào với đội ngũ y bác sĩ giàu kinh nghiệm, chuyên môn cao, được đào tạo từ những trường đại học nổi tiếng trong và ngoài nước với các chuyên gia đầu ngành trong các lĩnh vực liên quan.',
      },
      {
        hospitalId: "8e8e67e0-b971-4efc-b563-587d6e5675d3",
        name: "Bệnh viện Hồng Đức 3",
        address: "Thành phố Hồ Chí Minh",
        avatar: '',
        description: 'Bệnh Viện Đa Khoa Hồng Đức ra đời vào tháng 9 năm 2000 có thể nói là một trong những nơi khám chữa bệnh uy tín. Hàng năm, bệnh viện Hồng Đức khám và điều trị cho hàng trăm ngàn bệnh nhân, hơn 5.000 bệnh nhân nội trú và phẫu thuật nội soi hơn 2.000 ca. Bệnh Viện Đa Khoa Hồng Đức đã hợp tác và ký kết cùng với những đối tác hàng đầu, được chuyển giao nhiều công nghệ chính thức và chuyên môn nhằm hỗ trợ khả năng chẩn đoán và thực hành cho đội ngũ y bác sĩ.'
      },
      {
        hospitalId: "cca2c6dc-f9dc-4560-ab75-154fcfeb529c",
        name: "Phòng khám Bệnh Viện Quốc Tế Hà Nội",
        address: "Thành phố Hà Nội",
        avatar: '',
        description: 'Phòng khám Đa khoa Quốc Tế Hà Nội số 152 Xã Đàn là cơ sở y tế chuyên khoa bệnh phụ khoa trực thuộc sự quản lý của Sở Y Tế, tiền thân của Trung tâm Chăm Sóc Sức Khỏe Sinh Sản Hà Nội hiện là Bệnh Viện Phụ Sản Hà Nội Cơ Sở 2, nhận được nhiều bằng khen, giấy khen vì những đóng góp trong ngành Y tế.'
      },
      {
        hospitalId: "4ef9c725-d451-473a-b9bd-b0b6e05db155",
        name: "Bệnh viện phụ sản Hà Nội",
        address: "Thành phố Hà Nội",
        avatar: '',
        description: 'Bệnh viện phụ sản hà nội uy tín là nơi khám định kỳ cũng như khám chữa bệnh ngay khi có bạn triệu chứng bất thường.Theo số liệu thống kê, 90% chị em phụ nữ mắc bệnh phụ khoa ít nhất một lần trong đời. Trong đó, có rất nhiều trường hợp tái nhiễm nhiều lần. Mặc dù bệnh phụ khoa không nguy hiểm tới tính mạng người bệnh. Nhưng nếu như bệnh kéo dài, tái phát nhiều lần có nguy cơ vô sinh, thậm chí ung thư là rất lớn.'
      },
      {
        hospitalId: "4fab9aca-acd3-4956-8e83-cabf6213559f",
        name: "Bệnh viện Quân Y 354",
        address: "Thành phố Hà Nội",
        avatar: '',
        description: 'Bệnh viện Quân y 354 thuộc Cục Quân y - Tổng cục Hậu cần - Bộ quốc phòng. Bệnh viên gồm 8 khoa nội, 7 khoa ngoại, 8 khối cận lâm sàng. Bệnh viện Quân y 354 có nhiệm vụ là thu dung, cấp cứu và điều trị cho hơn 100 đầu mối tuyến, với quy mô hơn 250 giường bệnh, đối tượng phục vụ đa dạng, bao gồm: Cán bộ cấp tướng, cấp tá, cấp uý, QNCN, HSQ-CS, CNVQP, các đối tượng chính sách của cơ quan Bộ Quốc phòng, các quân binh chủng, các Tổng cục, bảo hiểm y tế và dịch vụ y tế (trong đó phần đông cán bộ quân đội và cán bộ nhà nước nghỉ hưu). Đồng thời sẵn sàng tham gia làm các nhiệm vụ khác khi có yêu cầu của cấp trên. Bệnh viện tọa lạc tại địa chỉ số 120 Đốc Ngữ, Vĩnh Phú, Ba Đình, Hà Nội, Việt Nam'
      },
      {
        hospitalId: "35dd30c7-41f0-436d-8c3e-56089d2d03f1",
        name: "Bệnh viện Bình Dân Đà Nẵng",
        address: "Đà Nẵng",
        avatar: '',
        description: 'Là bệnh viện tư nhân đầu tiên của Việt Nam, được thành lập năm 1997 bởi bác sĩ Vũ Thị Tư Hằng. Bệnh viện có quy mô 100 giường nội trú, khám chữa bệnh đa khoa. Mũi nhọn chuyên sâu là điều trị bướu cổ - Basedow. '
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(HOSPITAL, null, {});
  }
};