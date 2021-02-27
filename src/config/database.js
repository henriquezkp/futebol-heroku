module.exports = {
    dialect: 'postgres',
    url: 'postgres://rdytvsmiexnlhc:e644864cbe5969a5b4e03d99591b9386e3e74bc0a8e4951798b39e6793176c8e@ec2-34-203-255-149.compute-1.amazonaws.com:5432/d24r8uqali0kk0',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};