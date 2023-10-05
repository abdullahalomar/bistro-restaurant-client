import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GiMoneyStack } from "react-icons/gi";
import { RiGroupLine } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });

  // bar Charts
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //bar chart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  //pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="w-full">
      <div className="mx-10">
        <p className="text-2xl font bold">
          <span className="text-orange-400 font-bold">Hi</span> Welcome Back{" "}
          <span className="font-bold text-2xl text-blue-500">
            {user.displayName}
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-7">
          <div className="flex items-center gap-4 w-42 h-40 rounded bg-primary text-primary-content place-content-center">
            <div>
              <GiMoneyStack size={60}></GiMoneyStack>
            </div>
            <div className="text-2xl text-white">
              <p>{stats.revenue}</p>
              <p>Revenue</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-42 h-40 rounded bg-secondary text-primary-content place-content-center">
            <div>
              <RiGroupLine size={60}></RiGroupLine>
            </div>
            <div className="text-2xl text-white">
              <p>{stats.users}</p>
              <p>Customers</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-42 h-40 rounded bg-info text-primary-content place-content-center">
            <div>
              <MdFastfood size={60}></MdFastfood>
            </div>
            <div className="text-2xl text-white">
              <p>{stats.products}</p>
              <p>Products</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-42 h-40 rounded bg-accent text-primary-content place-content-center">
            <div>
              <TbTruckDelivery size={60}></TbTruckDelivery>
            </div>
            <div className="text-2xl text-white">
              <p>{stats.orders}</p>
              <p>Orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* bar chart */}
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* pie chart */}
        <div className="w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
