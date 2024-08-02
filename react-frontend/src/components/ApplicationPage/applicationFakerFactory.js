
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
ApplicationName: faker.lorem.sentence("8"),
Language: faker.datatype.number(""),
TimeZone: faker.lorem.sentence(""),
AppPerformance: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
