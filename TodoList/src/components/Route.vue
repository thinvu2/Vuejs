<template>
    <div class="content">
      <table id="tb_data">
        <tr id="line_main">
          <!-- Các ô dữ liệu -->
          <td v-for="(item, index) in arrRoute" :key="index" class="have_data">
            <span :id="item.group_next">{{ item.group_next }}</span>
          </td>
        </tr>
      </table>
  
      <!-- SVG cho các đường nối giữa các ô -->
      <svg id="route_svg" :height="svgHeight" :width="svgWidth">
        <!-- Đường nối thẳng -->
        <line
          v-for="(item, index) in filteredRoutes"
          :key="index"
          :x1="getX1(index)"
          :y1="getY1(index)"
          :x2="getX2(index)"
          :y2="getY2(index)"
          stroke="blue"
          stroke-width="2"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "route",
    data() {
      return {
        arrRoute: [
          { group_name: "0", group_next: "ASSY", state_flag: "0", step_sequence: "1" },
          { group_name: "ASSY", group_next: "PACK_BOX", state_flag: "0", step_sequence: "2" },
          { group_name: "PACK_BOX", group_next: "VI1", state_flag: "0", step_sequence: "3" },
          { group_name: "VI1", group_next: "CHECK_WEIGHT", state_flag: "0", step_sequence: "5" },
          { group_name: "CHECK_WEIGHT", group_next: "OBA VI", state_flag: "0", step_sequence: "6" },
          { group_name: "OBA VI", group_next: "PACK_CTN", state_flag: "0", step_sequence: "8" },
          { group_name: "PACK_CTN", group_next: "WEIGHT_CTN", state_flag: "0", step_sequence: "9" },
          { group_name: "WEIGHT_CTN", group_next: "PACK_PALT", state_flag: "0", step_sequence: "10" },
          { group_name: "PACK_PALT", group_next: "FQA", state_flag: "0", step_sequence: "11" },
          { group_name: "FQA", group_next: "CHK_PALT", state_flag: "0", step_sequence: "12" },
          { group_name: "CHK_PALT", group_next: "STOCKIN", state_flag: "0", step_sequence: "13" },
        ],
        svgWidth: 1000,
        svgHeight: 100, // Chỉnh chiều cao của SVG
        cellWidth: 80,  // Chiều rộng mỗi ô
        lineYPosition: 80, // Vị trí y của đường nối
      };
    },
    computed: {
      filteredRoutes() {
        // Trả về các phần tử cần thiết để vẽ đường nối thẳng
        return this.arrRoute.filter((item, index) => index < this.arrRoute.length - 1);
      },
    },
    methods: {
      getX1(index) {
        // Hàm tính toán x1, căn giữa ô đầu tiên
        return index * this.cellWidth + this.cellWidth / 2;
      },
      getY1(index) {
        // Vị trí y của x1
        return this.lineYPosition;
      },
      getX2(index) {
        // Hàm tính toán x2, căn giữa ô tiếp theo
        return (index + 1) * this.cellWidth + this.cellWidth / 2;
      },
      getY2(index) {
        // Vị trí y của x2
        return this.lineYPosition;
      },
    },
  };
  </script>
  
  <style>
  .content {
    height: 200px;
    text-align: center;
    position: relative;
  }
  
  .have_data {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5em;
    text-align: center;
    width: 80px; /* Điều chỉnh để phù hợp với kích thước cellWidth */
  }
  
  table {
    margin: 0 auto;
  }
  
  svg {
    margin-top: 10px;
  }
  </style>
  