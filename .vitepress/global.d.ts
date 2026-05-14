declare global {
  type Indexable<T = any> = {
    [key: string]: T;
  };
  type PositionType = typeof positionValues[number];

  interface KeyValue {
    key: string,
    value: any
  }

  interface OptionValue {
    label: string;
    value: string | number;
    name?: string;
    icon?: string;
    color?: string;
    tips?: string;
  }

}
export {}
