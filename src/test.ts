import { DateTime } from "luxon";

export const dateShortFormat = "MM/dd/yyyy";

export const test = async () => {
  const dates: MamadTTMDateRange[] = [];
  const firstMonth = DateTime.now().set({
    day: 1,
    month: 1,
    year: 2022,
  });
  for (let index = 0; index < 12; index++) {
    const startMonth = firstMonth.plus({ months: index });
    const endMonth = startMonth.plus({ months: 1 }).minus({ days: 1 });

    dates.push({
      fromDate: startMonth.toFormat(dateShortFormat),
      toDate: endMonth.toFormat(dateShortFormat),
    });
  }

  console.log("dick to mamad", dates);
  return true;
};

export interface MamadTTMDateRange {
  fromDate: string;
  toDate: string;
}
