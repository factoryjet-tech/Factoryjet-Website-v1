#!/bin/bash

# UK Home Page Extraction Verification Script
# This script verifies all files are in place and the page is ready to use

echo "=========================================="
echo "UK Home Page Extraction Verification"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS=0
FAIL=0

# Function to check if file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} $1 (MISSING)"
        ((FAIL++))
    fi
}

# Function to check if directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} $1 (MISSING)"
        ((FAIL++))
    fi
}

echo "1. Checking Main Page Files..."
check_file "src/app/uk/page.tsx"
check_file "src/app/uk/layout.tsx"
check_file "src/app/uk/metadata.ts"
check_file "src/app/uk/schema.ts"
echo ""

echo "2. Checking Component Directories..."
check_dir "src/app/uk/components"
check_dir "src/app/uk/sections"
echo ""

echo "3. Checking Component Files..."
check_file "src/app/uk/components/LeadFormModal.tsx"
check_file "src/app/uk/sections/Hero.tsx"
check_file "src/app/uk/sections/DigitalLandscape.tsx"
check_file "src/app/uk/sections/Services.tsx"
check_file "src/app/uk/sections/Cities.tsx"
check_file "src/app/uk/sections/TechStack.tsx"
check_file "src/app/uk/sections/Pricing.tsx"
check_file "src/app/uk/sections/FAQ.tsx"
check_file "src/app/uk/sections/FinalCTA.tsx"
check_file "src/app/uk/sections/Footer.tsx"
echo ""

echo "4. Checking Supporting Utilities..."
check_file "src/components/MeshGradient.tsx"
check_file "src/lib/gsap.ts"
echo ""

echo "5. Checking Image Assets..."
check_dir "public/images/uk"
check_file "public/images/uk/hero-uk.webp"
check_file "public/images/uk/uk-landscape.jpg"
check_file "public/images/uk/service-web-design.webp"
check_file "public/images/uk/service-ecommerce.webp"
check_file "public/images/uk/service-ai-agents.webp"
check_file "public/images/uk/service-ai-seo.webp"
check_file "public/images/uk/city-leeds.jpg"
check_file "public/images/uk/city-manchester.jpg"
check_file "public/images/uk/city-birmingham.jpg"
check_file "public/images/uk/city-sheffield.jpg"
check_file "public/images/uk/city-bristol.jpg"
check_file "public/images/uk/city-edinburgh.jpg"
check_file "public/images/uk/city-liverpool.jpg"
check_file "public/images/uk/city-glasgow.jpg"
check_file "public/images/uk/city-newcastle.jpg"
check_file "public/images/uk/city-nottingham.jpg"
echo ""

echo "6. Checking Documentation..."
check_file "UK_EXTRACTION_GUIDE.md"
check_file "src/app/uk/README.md"
echo ""

echo "7. Checking Configuration Files..."
# These should exist in root (not in /uk)
if [ -f "tsconfig.json" ]; then
    echo -e "${GREEN}✓${NC} tsconfig.json (root)"
    # Check for path alias
    if grep -q '"@/": \["./src/\*"\]' tsconfig.json; then
        echo -e "${GREEN}  ✓${NC} Path alias configured (@)"
        ((PASS++))
    else
        echo -e "${YELLOW}  ⚠${NC} Path alias might not be configured"
    fi
    ((PASS++))
else
    echo -e "${RED}✗${NC} tsconfig.json (root) - Cannot verify path aliases"
    ((FAIL++))
fi

if [ -f "package.json" ]; then
    echo -e "${GREEN}✓${NC} package.json (root)"
    ((PASS++))
    # Check for required dependencies
    if grep -q '"gsap"' package.json; then
        echo -e "${GREEN}  ✓${NC} gsap dependency found"
        ((PASS++))
    else
        echo -e "${RED}  ✗${NC} gsap dependency NOT found - run: npm install gsap"
        ((FAIL++))
    fi
    if grep -q '"@gsap/react"' package.json; then
        echo -e "${GREEN}  ✓${NC} @gsap/react dependency found"
        ((PASS++))
    else
        echo -e "${RED}  ✗${NC} @gsap/react dependency NOT found - run: npm install @gsap/react"
        ((FAIL++))
    fi
else
    echo -e "${RED}✗${NC} package.json (root) - Cannot verify dependencies"
    ((FAIL++))
fi
echo ""

echo "8. Checking Contact Information..."
# Check for contact info in key files
if grep -q "connect@factoryjet.com" src/app/uk/sections/Footer.tsx; then
    echo -e "${GREEN}✓${NC} Email: connect@factoryjet.com (Footer)"
    ((PASS++))
else
    echo -e "${YELLOW}⚠${NC} Email address not found in Footer"
fi

if grep -q "919699977699" src/app/uk/sections/Footer.tsx; then
    echo -e "${GREEN}✓${NC} WhatsApp: +91 96999 77699 (Footer)"
    ((PASS++))
else
    echo -e "${RED}✗${NC} WhatsApp number not found in Footer"
    ((FAIL++))
fi

if grep -q "919699977699" src/app/uk/components/LeadFormModal.tsx; then
    echo -e "${GREEN}✓${NC} WhatsApp: +91 96999 77699 (LeadFormModal)"
    ((PASS++))
else
    echo -e "${RED}✗${NC} WhatsApp number not found in LeadFormModal"
    ((FAIL++))
fi
echo ""

echo "=========================================="
echo "SUMMARY"
echo "=========================================="
echo -e "Passed: ${GREEN}$PASS${NC}"
echo -e "Failed: ${RED}$FAIL${NC}"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. npm run dev"
    echo "2. Visit http://localhost:3000/uk"
    echo "3. Test all sections and interactions"
    echo "4. Run Lighthouse audit"
    exit 0
else
    echo -e "${RED}✗ Some checks failed. Please address the issues above.${NC}"
    exit 1
fi
