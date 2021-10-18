import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import STRINGS from '../assets/strings';
import Colors from '../theme/colors';

type BarChartProps = {
  currentValue: number;
  totalValue: number;
  style?: any;
};

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
  const {style, currentValue, totalValue} = props;
  return (
    <View style={style && style}>
      <View style={styles.row}>
        <Text style={styles.debitCardSpendingLimitText}>
          {STRINGS.debit_card_spending_limit_text}
        </Text>
        <View style={styles.spendPerLimitContainer}>
          <Text style={styles.spendAmount}>{`$ ${currentValue}`}</Text>
          <Text style={[styles.limitAmount, styles.mh6]}>|</Text>
          <Text style={styles.limitAmount}>{`$ ${totalValue}`}</Text>
        </View>
      </View>
      <View style={[styles.progressContainer, styles.mv6]}>
        <View
          style={[
            styles.progress,
            {width: `${(currentValue / totalValue) * 100}%`},
          ]}
        />
      </View>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  mv6: {
    marginVertical: 6,
  },
  mh6: {
    marginHorizontal: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    width: '100%',
    backgroundColor: Colors.green1,
    height: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: Colors.green,
    height: 16,
  },
  debitCardSpendingLimitText: {
    fontSize: 13,
    fontWeight: '300',
    fontFamily: 'Avenir Next',
    color: Colors.text1,
  },
  spendPerLimitContainer: {
    flexDirection: 'row',
  },
  spendAmount: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Avenir Next',
    color: Colors.green,
  },
  limitAmount: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Avenir Next',
    color: Colors.text1,
  },
});
