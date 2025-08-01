# PowerShell Execution Policy Fix Script
# Run this script as Administrator to fix npm execution issues

Write-Host "🔧 Fixing PowerShell Execution Policy..." -ForegroundColor Yellow

# Set execution policy to allow npm scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

Write-Host "✅ Execution policy updated successfully!" -ForegroundColor Green
Write-Host "📝 You can now run npm commands without issues." -ForegroundColor Cyan

# Test npm
Write-Host "🧪 Testing npm..." -ForegroundColor Yellow
try {
    npm --version
    Write-Host "✅ npm is working correctly!" -ForegroundColor Green
} catch {
    Write-Host "❌ npm test failed. Please restart your terminal." -ForegroundColor Red
}

Write-Host "🚀 You can now run: npm run dev" -ForegroundColor Green 