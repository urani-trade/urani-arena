
import OrderBatch from '@/components/batch/order-batch'
import { TokenTransferGraph } from '@/components/token-transfer-graph'

export default function Arena() {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-8/10 order-2 md:order-1">
        <TokenTransferGraph />
      </div>
      <div className="w-full md:w-2/10 order-1 md:order-2 flex items-start  md:justify-end text-center md:text-left lg:ml-20">
        <OrderBatch />
      </div>
    </div>
  );
}


