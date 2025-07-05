import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Copy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Sui ObjectID Monitor
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Real-time monitoring of Sui blockchain Object IDs with
            auto-discovery
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-purple-800/50 border-purple-600 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
              <div className="text-sm text-purple-200">Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-800/50 border-purple-600 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
              <div className="text-sm text-purple-200">Object IDs</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-800/50 border-purple-600 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-300 mb-2">0</div>
              <div className="text-sm text-purple-200">Categories</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-800/50 border-purple-600 text-center">
            <CardContent className="p-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                🔍 Discover
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
          <Input
            placeholder="Search projects, Object IDs, or package addresses..."
            className="pl-10 py-6 text-lg bg-purple-800/50 border-purple-600 text-white placeholder-purple-300"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            All (0)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            DeFi (2)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            Gaming (0)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            NFT (0)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            Staking (0)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            Governance (0)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            Infrastructure (1)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            Oracle (0)
          </Button>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-200 hover:bg-purple-800"
          >
            DApp (0)
          </Button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* DeepBook */}
          <Card className="bg-purple-800/50 border-purple-600">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  DeepBook
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <Badge className="bg-green-600 text-white mt-2">DeFi</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200 text-sm mb-4">
                Central Limit Order Book on Sui
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-purple-400">Package ID</p>
                  <div className="flex items-center gap-2">
                    <code className="text-blue-400 text-xs">0xdec9</code>
                    <Copy className="h-3 w-3 text-purple-400 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-purple-400">
                    Modules:{" "}
                    <span className="text-purple-200">clob, order, book</span>
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-xs text-purple-400">Object IDs</p>
                    <p className="text-purple-200 font-bold">0</p>
                  </div>
                  <div>
                    <p className="text-xs text-purple-400">Last Updated</p>
                    <p className="text-purple-200">Jul 5, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cetus Protocol */}
          <Card className="bg-purple-800/50 border-purple-600">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  Cetus Protocol
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <Badge className="bg-green-600 text-white mt-2">DeFi</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200 text-sm mb-4">Leading DEX on Sui</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-purple-400">Package ID</p>
                  <div className="flex items-center gap-2">
                    <code className="text-blue-400 text-xs">
                      0x1eabed72c53f2b3805120a081dc15963c204cd00d11543259b2cf7d3
                    </code>
                    <Copy className="h-3 w-3 text-purple-400 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-purple-400">
                    Modules:{" "}
                    <span className="text-purple-200">clmm, pool, swap</span>
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-xs text-purple-400">Object IDs</p>
                    <p className="text-purple-200 font-bold">0</p>
                  </div>
                  <div>
                    <p className="text-xs text-purple-400">Last Updated</p>
                    <p className="text-purple-200">Jul 5, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sui Framework */}
          <Card className="bg-purple-800/50 border-purple-600">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  Sui Framework
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <Badge className="bg-purple-600 text-white mt-2">
                  Infrastructure
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200 text-sm mb-4">
                Core Sui Protocol and Framework
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-purple-400">Package ID</p>
                  <div className="flex items-center gap-2">
                    <code className="text-blue-400 text-xs">0x2</code>
                    <Copy className="h-3 w-3 text-purple-400 cursor-pointer" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-purple-400">
                    Modules:{" "}
                    <span className="text-purple-200">
                      sui, coin, transfer +1 more
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-xs text-purple-400">Object IDs</p>
                    <p className="text-purple-200 font-bold">0</p>
                  </div>
                  <div>
                    <p className="text-xs text-purple-400">Last Updated</p>
                    <p className="text-purple-200">Jul 5, 2025</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-purple-400">Publisher</p>
                  <p className="text-purple-200">0x0...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsor Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-purple-800/30 border-purple-600 border-dashed">
            <CardContent className="p-12 text-center">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">
                Sponsor Space
              </h3>
              <p className="text-purple-300 mb-4">
                Advertise your Sui project here
              </p>
              <div className="bg-purple-900/50 rounded-lg p-8 border-2 border-dashed border-purple-600">
                <p className="text-purple-400">Your Ad Here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-800/30 border-purple-600 border-dashed">
            <CardContent className="p-12 text-center">
              <div className="text-2xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">
                Premium Space
              </h3>
              <p className="text-purple-300 mb-4">
                Premium advertising for developers
              </p>
              <div className="bg-purple-900/50 rounded-lg p-8 border-2 border-dashed border-purple-600">
                <p className="text-purple-400">Premium Ad Space</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
