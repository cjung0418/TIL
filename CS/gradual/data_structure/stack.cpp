#include <bits/stdc++.h> 
using namespace std;
stack<int> stk;
int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	for (int i = 0; i < 10; i++)stk.push(i);
	while (stk.size()) {
		cout << stk.top() << " ";
		stk.pop();
	}
}
